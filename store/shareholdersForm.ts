import { ShareholdersForm, Shareholder } from '~/typings/interface'

export const state = ():ShareholdersForm => ({
  isOpen: 0,
  currentFormStep: 0,
  shareholders: [
    {
      title: 'Shareholder 1 (applicant)',
      generalData: {
        naturalPerson: null,
        fluent: null,
        resident: null,
        director: null
      },
      personalData: {
        salutation: '',
        firstName: '',
        surname: '',
        dateOfBirth: '',
        countryOfBirth: ''
      }
    }
  ]
})

export const mutations = {
  // Root Mutations
  open (state:ShareholdersForm, open:number) {
    state.isOpen = open
  },
  changeStep (state:ShareholdersForm, step:number) {
    state.currentFormStep = step
  },
  addShareholder (state:ShareholdersForm, shareholder:Shareholder) {
    state.shareholders.push(shareholder)
  },
  removeShareholder (state:ShareholdersForm, shareholder:Shareholder) {
    state.shareholders.splice(state.shareholders.findIndex(el => el.title === shareholder.title), 1)
  },
  // General Data Mutations
  toggleNaturalPerson (state:ShareholdersForm, data: { index: number, value: boolean }) {
    state.shareholders[data.index].generalData.naturalPerson = data.value
  },
  toggleFluent (state:ShareholdersForm, data: { index: number, value: boolean }) {
    state.shareholders[data.index].generalData.fluent = data.value
  },
  toggleResident (state:ShareholdersForm, data: { index: number, value: boolean }) {
    state.shareholders[data.index].generalData.resident = data.value
  },
  toggleDirector (state:ShareholdersForm, data: { index: number, value: boolean }) {
    state.shareholders[data.index].generalData.director = data.value
  },
  // Personal Data Mutations
  changeSalutation (state:ShareholdersForm, data: { index: number, value: string }) {
    state.shareholders[data.index].personalData.salutation = data.value
  },
  changeFirstName (state:ShareholdersForm, data: { index: number, value: string }) {
    state.shareholders[data.index].personalData.firstName = data.value
  },
  changeSurname (state:ShareholdersForm, data: { index: number, value: string }) {
    state.shareholders[data.index].personalData.surname = data.value
  },
  changeDateOfBirth (state:ShareholdersForm, data: { index: number, value: string }) {
    state.shareholders[data.index].personalData.dateOfBirth = data.value
  },
  changeCountryOfBirth (state:ShareholdersForm, data: { index: number, value: string }) {
    state.shareholders[data.index].personalData.countryOfBirth = data.value
  }
}
