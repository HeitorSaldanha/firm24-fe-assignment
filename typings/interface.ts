export interface GeneralData {
  naturalPerson: boolean|null,
  fluent: boolean|null,
  resident: boolean|null,
  director: boolean|null
}

export interface Shareholder {
  title: string,
  generalData: GeneralData
}

export interface ShareholdersForm {
  isOpen: number,
  currentFormStep: number,
  shareholders: [Shareholder]
}
