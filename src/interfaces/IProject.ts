import { type StaticImageData } from "next/image";

export interface IProject {
    name: string;
    description: string;
    is_featured: boolean;
    img_source: StaticImageData | string;
    source_code_link: string;
    demo_link: string;
    domains: string[];
    type: string;
  }