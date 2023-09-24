import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Digimon } from '../interfaces/digimon/digimon.interface';
import { Digimons } from '../interfaces/digimon/digimons.interface';
import { Attributes } from '../interfaces/digimon/attributes.interface';
import { Levels } from '../interfaces/digimon/levels.interface';

@Injectable({
    providedIn: 'root'
})
export class DigimonApiService {
    private apiHost = environment.apiDigimon;

    constructor(private _http: HttpClient) {}

    /**
     * Esto devolverá una lista paginada de digimons en esta API.
     *
     * @returns
     */
    public getDigimonList(params: HttpParams) {
        const url = `${this.apiHost}/digimon`;

        return this._http.get<Digimons>(url, { params });
    }

    /**
     * Esto devolverá un digimon y toda su información.
     *
     * @param valor {id} o {name}
     * @returns
     */
    public getDigimon(valor: number | string) {
        const url = `${this.apiHost}/digimon/${valor}`;

        return this._http.get<Digimon>(url);
    }

    /**
     * Esto devolverá una lista paginada de atributos en esta API.
     *
     * @returns
     */
    public getAttributes() {
        const url = `${this.apiHost}/attribute`;

        return this._http.get<Attributes>(url);
    }

    /**
     * Esto devolverá un atributo y toda su información.
     *
     * @param valor {id} o {name}
     * @returns
     */
    public getAttribute(valor: number | string) {
        const url = `${this.apiHost}/attribute/${valor}`;

        return this._http.get(url);
    }

    /**
     * Esto devolverá una lista paginada de campo en esta API.
     *
     * @returns
     */
    public getFields() {
        const url = `${this.apiHost}/field`;

        return this._http.get(url);
    }

    /**
     * Esto devolverá un campo y toda su información.
     *
     * @param valor {id} o {name}
     * @returns
     */
    public getField(valor: number | string) {
        const url = `${this.apiHost}/field/${valor}`;

        return this._http.get(url);
    }

    /**
     * Esto devolverá una lista paginada de niveles en esta API.
     *
     * @returns
     */
    public getLevels() {
        const url = `${this.apiHost}/level`;

        return this._http.get<Levels>(url);
    }

    /**
     * Esto devolverá un nivel y toda su información.
     *
     * @param valor {id} o {name}
     * @returns
     */
    public getLevel(valor: number | string) {
        const url = `${this.apiHost}/level/${valor}`;

        return this._http.get(url);
    }

    /**
     * Esto devolverá una lista paginada de atributos en esta API.
     *
     * @returns
     */
    public getTypes() {
        const url = `${this.apiHost}/type`;

        return this._http.get(url);
    }

    /**
     * Esto devolverá un tipo y toda su información.
     *
     * @param valor {id} o {name}
     * @returns
     */
    public getType(valor: number | string) {
        const url = `${this.apiHost}/type/${valor}`;

        return this._http.get(url);
    }

    /**
     * Esto devolverá una lista paginada de atributos en esta API.
     *
     * @returns
     */
    public getSkills() {
        const url = `${this.apiHost}/skill`;

        return this._http.get(url);
    }

    /**
     * Esto devolverá una habilidad y toda su información.
     *
     * @param valor {id} o {name}
     * @returns
     */
    public getSkill(valor: number | string) {
        const url = `${this.apiHost}/skill/${valor}`;

        return this._http.get(url);
    }
}

export interface paramsFilterDigimons {
    page?: number;
    pageSize?: number;
    name?: string;
    attribute?: string;
    level?: string;
}
