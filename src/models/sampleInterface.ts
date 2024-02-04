export interface SampleInterface {
    id: number;
    category: string;
    title: string;
    subtitle?: string;
    imageURL?: string;
    description: string;
    requirement?: string;
    resource: Record <string,string>[];
    dateWritten: string;
}
