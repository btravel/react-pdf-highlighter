import React, { Component } from "react";
import type { PDFDocumentProxy } from "pdfjs-dist";
interface Props {
    /** See `GlobalWorkerOptionsType`. */
    workerSrc: string;
    /**
     * One of two should provided
     * url - link to pdf file
     * data - typed array with pdf file content
     */
    url?: string;
    data?: Uint8Array;
    beforeLoad: JSX.Element;
    errorMessage?: JSX.Element;
    children: (pdfDocument: PDFDocumentProxy) => JSX.Element;
    onError?: (error: Error) => void;
    cMapUrl?: string;
    cMapPacked?: boolean;
}
interface State {
    pdfDocument: PDFDocumentProxy | null;
    error: Error | null;
}
export declare class PdfLoader extends Component<Props, State> {
    state: State;
    static defaultProps: {
        workerSrc: string;
    };
    documentRef: React.RefObject<HTMLElement>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate({ url, data }: Props): void;
    componentDidCatch(error: Error, info?: any): void;
    load(): void;
    render(): JSX.Element;
    renderError(): React.FunctionComponentElement<any> | null;
}
export default PdfLoader;
