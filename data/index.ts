export interface PageTab {
    title: string;
    name: string;
}
export interface LinkedPage {
    domain: string;
    title: string;
}

/** loads a list of all available pages */
export default async function fetchTabs(): Promise<PageTab[]> {
    const data = (await import(`./manifest.json` )).default as Array<[string, string]>;
    return data.map(([title, name]) => ({title, name}))
}

/** Loads a single page form the list of known pages */
export async function fetchPages(name: string): Promise<LinkedPage[]> {
    const data = (await import(`./tabs/${name}.json`)).default as Array<[string, string, boolean]>;
    return data.map(([domain, title]) => ({domain, title }));
}