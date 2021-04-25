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
  dateOfBirth: string,
  countryOfBirth: string
}

export interface Shareholder {
  title: string,
  generalData: GeneralData,
  personalData: PersonalData,
}

export interface ShareholdersForm {
  isOpen: number,
  currentFormStep: number,
  shareholders: [Shareholder]
}
