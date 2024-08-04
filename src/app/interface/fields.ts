export interface Field<T> {
  header: string;
  property: keyof T;
}
