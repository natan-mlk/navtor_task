export interface EmissionDataModel {
    id: number;
    name: string;
    mmsi: string;
    imo: number;
    companyId: number;
    companyName: string;
    startDate: string;
    active: boolean;
    vesselType: string;
}