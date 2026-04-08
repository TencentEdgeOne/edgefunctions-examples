import { createHighlighter, type Highlighter } from 'shiki';

const edgeoneSwissTheme = {
  name: 'edgeone-swiss',
  type: 'light' as const,
  colors: {
    'editor.background': '#F7F7F5',
    'editor.foreground': '#4A4A4A',
  },
  tokenColors: [
    {
      scope: ['keyword', 'storage.type', 'storage.modifier'],
      settings: { foreground: '#F4793E' },
    },
    {
      scope: ['string', 'string.quoted'],
      settings: { foreground: '#2E7D32' },
    },
    {
      scope: ['constant.numeric', 'constant.language'],
      settings: { foreground: '#C62828' },
    },
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: '#8A8A8A', fontStyle: 'italic' },
    },
    {
      scope: ['entity.name.function', 'support.function'],
      settings: { foreground: '#1A1A1A' },
    },
    {
      scope: ['variable', 'variable.other'],
      settings: { foreground: '#4A4A4A' },
    },
    {
      scope: ['entity.name.type', 'support.type'],
      settings: { foreground: '#0097A7' },
    },
    {
      scope: ['punctuation'],
      settings: { foreground: '#8A8A8A' },
    },
    {
      scope: ['meta.property-name', 'support.type.property-name'],
      settings: { foreground: '#1A1A1A' },
    },
    {
      scope: ['constant.other'],
      settings: { foreground: '#7C4DFF' },
    },
  ],
};

// Singleton highlighter
let highlighterPromise: Promise<Highlighter> | null = null;

function getHighlighter(): Promise<Highlighter> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: [edgeoneSwissTheme],
      langs: ['javascript', 'typescript', 'json'],
    }).catch((err) => {
      highlighterPromise = null;
      throw err;
    });
  }
  return highlighterPromise;
}

export async function highlightCode(
  code: string,
  lang = 'javascript',
): Promise<string> {
  const highlighter = await getHighlighter();
  return highlighter.codeToHtml(code, {
    lang,
    theme: 'edgeone-swiss',
  });
}
