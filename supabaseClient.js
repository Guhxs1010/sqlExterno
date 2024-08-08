// supabaseClient.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://kbpalfvpgsfpdueoonwz.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImticGFsZnZwZ3NmcGR1ZW9vbnd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMxMTc1NDMsImV4cCI6MjAzODY5MzU0M30._dtk1lwy21XJT9W9oa5CJZLXHgP5ygfNNEh_AAtQ_Jo';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
    localStorage: AsyncStorage,
    detectSessionInUrl: false,
});
