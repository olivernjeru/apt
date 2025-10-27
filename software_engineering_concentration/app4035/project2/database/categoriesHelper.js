import fs from 'fs/promises';
const filePath = 'database/categories.json';

export async function readCategories() {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

export async function writeCategories(categories) {
    await fs.writeFile(filePath, JSON.stringify(categories, null, 2), 'utf-8');
}
