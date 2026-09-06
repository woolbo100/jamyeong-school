import React from 'react';
import type { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import DownloadsClient, { DownloadLogItem } from './DownloadsClient';

export const metadata: Metadata = {
  title: '자료 다운로드 관리 | 자명스쿨 어드민',
};

export default async function AdminDownloadsPage() {
  const supabase = await createClient();

  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();

  let initialLogs: DownloadLogItem[] = [];
  let todayCount = 0;
  let monthCount = 0;
  let topResource: { title: string; count: number } | null = null;

  try {
    // 1. 오늘 다운로드 수
    const { count: tc } = await supabase
      .from('jamyung_resource_downloads')
      .select('*', { count: 'exact', head: true })
      .gte('downloaded_at', todayStart);
    todayCount = tc || 0;

    // 2. 이번 달 다운로드 수
    const { count: mc } = await supabase
      .from('jamyung_resource_downloads')
      .select('*', { count: 'exact', head: true })
      .gte('downloaded_at', monthStart);
    monthCount = mc || 0;

    // 3. 최다 다운로드 인기 자료
    const { data: topRes } = await supabase
      .from('jamyung_resources')
      .select('title, download_count')
      .order('download_count', { ascending: false })
      .limit(1)
      .single();

    if (topRes && topRes.download_count > 0) {
      topResource = {
        title: topRes.title,
        count: topRes.download_count,
      };
    }

    // 4. 최근 다운로드 로그 목록 (최대 100건)
    const { data: logs } = await supabase
      .from('jamyung_resource_downloads')
      .select(`
        id,
        downloaded_at,
        source,
        utm_source,
        utm_campaign,
        referrer,
        user_id,
        jamyung_resources (
          resource_code,
          title
        )
      `)
      .order('downloaded_at', { ascending: false })
      .limit(100);

    if (logs) {
      initialLogs = logs.map((l: any) => ({
        id: l.id,
        userName: l.user_id ? '회원' : '비회원',
        userEmail: l.user_id ? '-' : '미로그인',
        resourceCode: l.jamyung_resources?.resource_code || 'YT',
        resourceTitle: l.jamyung_resources?.title || '자명 교육자료',
        downloaded_at: l.downloaded_at,
        source: l.source,
        utm_source: l.utm_source,
        utm_campaign: l.utm_campaign,
        referrer: l.referrer,
      }));
    }
  } catch (err) {
    console.error('Admin downloads query error:', err);
  }

  return (
    <DownloadsClient
      initialLogs={initialLogs}
      todayCount={todayCount}
      monthCount={monthCount}
      topResource={topResource}
    />
  );
}
