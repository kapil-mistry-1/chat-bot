export interface Chat {
    response: string,
    subQuestions: string[],
    intermediateQuery: boolean,
    from?: string,
    time?: string,
    isVisible?: boolean
}