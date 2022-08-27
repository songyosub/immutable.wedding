import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yxpaflixqyundlbfxyvc.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4cGFmbGl4cXl1bmRsYmZ4eXZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAyNzk5MDcsImV4cCI6MTk3NTg1NTkwN30.aY9ik2zJ2ePDnOsLiI-H6kdMFUqPJHT4dUtc0sOMIic';

if (supabaseUrl == null || supabaseAnonKey == null) {
  throw Error(
    `[Supabase] Failed initialize client -> supabaseUrl: ${supabaseUrl} / supabaseAnonKey: ${supabaseAnonKey}`
  );
}

export const api = createClient(supabaseUrl, supabaseAnonKey);
