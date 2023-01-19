export interface ICompany {
  id: number,
  business_name: string,
  logo: string,
  industry: string,
  type: string,
  catch_phrase: string,
  phone_number: string,
  full_address: string,
  latitude: number,
  longitude: number,
  inRussia?: boolean
}
