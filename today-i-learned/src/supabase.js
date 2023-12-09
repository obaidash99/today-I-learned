import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ougrbaifurlmoteofyof.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91Z3JiYWlmdXJsbW90ZW9meW9mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE4OTQ3NDksImV4cCI6MjAxNzQ3MDc0OX0.LO5w68qRST6O50pIKaTsDonHzIqnfBAv6pj2osVClm8';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
