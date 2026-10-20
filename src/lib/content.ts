import { getEntry } from 'astro:content';
export const LOCALE='en';
export async function getUi() {
  const e=await getEntry('ui',LOCALE);
  if (!e) throw new Error('Missing UI strings');
  return e.data;
}
const escape=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
/** Limited inline Markdown for copy in YAML; escape HTML to keep the site safe. */
export function md(s:string):string {
  return escape(s).replace(/`([^`]+)`/g,'<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g,'<a class="link" href="$2">$1</a>');
}
