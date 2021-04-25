export interface GeneralData {
  naturalPerson: boolean|null,
  fluent: boolean|null,
  resident: boolean|null,
  director: boolean|null
}

export interface PersonalData {
  salutation: string,
  firstName: string,
  surname: string,
  dateOfBirth: Date,
  countryOfBirth: string
}

export interface ContactDetails {
  telephoneNumber: string,
  emailAddress: string,
  postalCode: string,
  houseNumber: string,
  complement: string,
  streetName: string,
  placeName: string
}

export interface Shareholder {
  title: string,
  generalData: GeneralData,
  personalData: PersonalData,
  contactDetails: ContactDetails
}

export interface ShareholdersForm {
  isOpen: number|null,
  currentFormStep: number,
  shareholders: Shareholder[]
}
