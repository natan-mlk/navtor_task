export interface EmissionDataModel {
    map(arg0: (item: any) => any, arg1: string): (number | [string | number, number | null] | import("highcharts").PointOptionsObject | null)[] | undefined;
    report_from_utc: string;
    report_to_utc: string;
    co2_emissions: number;
    sox_emissions: number;
    nox_emissions: number;
    pm_emissions: string;
    ch4_emissions: string;
}

export interface EmissionsCollectionModel {
    id: number;
    timeSeries: EmissionDataModel;
}