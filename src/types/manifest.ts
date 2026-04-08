export interface Category {
  id: string;
  label: string;
  labelZh: string;
  color: string;
}

export interface Example {
  slug: string;
  title: string;
  titleZh: string;
  category: string;
  tags: string[];
  summary: string;
  summaryZh: string;
  sourceFile: string;
  readme: string;
  readmeZh: string;
  onlineExampleUrl: string;
  playgroundReady: boolean;
}

export interface Manifest {
  categories: Category[];
  examples: Example[];
}
