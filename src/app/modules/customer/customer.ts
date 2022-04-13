export interface Customer {
    id: string;
    name: string;
    phone: string;
    address: string;
    cars: CustomerCar[];
}

export interface CustomerCar{
    id: string;
    model: string;
    year: number;
    color: string;
}

export interface CustomerTable{
    columnName: string;
    columnProp: string;
}