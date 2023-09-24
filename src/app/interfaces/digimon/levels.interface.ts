// Generated by https://quicktype.io

export interface Levels {
    content:  LevelsContent;
    pageable: Pageable;
}

export interface LevelsContent {
    name:        string;
    description: string;
    fields:      LevelsField[];
}

export interface LevelsField {
    id:   number;
    name: string;
    href: string;
}

export interface Pageable {
    currentPage:    number;
    elementsOnPage: number;
    totalElements:  number;
    totalPages:     number;
    previousPage:   string;
    nextPage:       string;
}