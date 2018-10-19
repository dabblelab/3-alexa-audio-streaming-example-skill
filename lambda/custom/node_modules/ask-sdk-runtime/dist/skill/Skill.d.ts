export interface Skill<Request, Response> {
    invoke(event: Request, context?: any): Promise<Response> | Response;
    supports(event: any, context?: any): Promise<boolean> | boolean;
}
