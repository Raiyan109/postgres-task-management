export interface ITask {
    id?: string;
    title: string;
    status: string;
    description: string;
    startTime: string;
    endTime: string;
    userId: string;   // 👈 new field
}
