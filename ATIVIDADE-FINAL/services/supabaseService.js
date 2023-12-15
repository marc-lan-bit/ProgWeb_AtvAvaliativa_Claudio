import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fltkvtsfwztntcgyvhzq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdGt2dHNmd3p0bnRjZ3l2aHpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0OTUyMjYsImV4cCI6MjAxODA3MTIyNn0.Al-Lo7P6Biq0MPf8uB16KIXwPCd6FpjuNErEzIpSQ84';


export const supabase = createClient(supabaseUrl, supabaseKey);