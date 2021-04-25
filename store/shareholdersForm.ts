import { ShareholdersForm, Shareholder } from '~/typings/interface'

export const state = ():ShareholdersForm => ({
  isOpen: 0,
  shareholders: [
    {
      title: 'Shareholder 1 (applicant)',
      currentFormStep: 0,
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
        dateOfBirth: new Date(),
        countryOfBirth: ''
      },
      contactDetails: {
        telephoneNumber: '',
        emailAddress: '',
        postalCode: '',
        houseNumber: '',
        complement: '',
        streetName: '',
        placeName: ''
      }
    }
  ]
})

export const mutations = {
  // Root Mutations
  open (state:ShareholdersForm, open:number|null) {
    state.isOpen = open
  },
  loadShareholders (state:ShareholdersForm, shareholders:Shareholder[]) {
    state.shareholders = shareholders
  },
  addShareholder (state:ShareholdersForm) {
    const newShareholder = {
      title: `Shareholder ${state.shareholders.length + 1}`,
      currentFormStep: 0,
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
        dateOfBirth: new Date(),
        countryOfBirth: ''
      },
      contactDetails: {
        telephoneNumber: '',
        emailAddress: '',
        postalCode: '',
        houseNumber: '',
        complement: '',
        streetName: '',
        placeName: ''
      }
    }
    state.shareholders.push(newShareholder)
    state.isOpen = state.shareholders.length - 1
  },
  removeShareholder (state:ShareholdersForm, index: number) {
    state.shareholders.splice(index, 1)
  },
  changeStep (state:ShareholdersForm, data: { index: number, step: number }) {
    state.shareholders[data.index].currentFormStep = data.step
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
    state.shareholders[data.index].personalData.dateOfBirth = new Date(data.value)
  },
  changeCountryOfBirth (state:ShareholdersForm, data: { index: number, value: string }) {
    state.shareholders[data.index].personalData.countryOfBirth = data.value
  },
  // Contact Data Mutations
  changeTelephoneNumber (state:ShareholdersForm, data: { index: number, value: string }) {
    state.shareholders[data.index].contactDetails.telephoneNumber = data.value
  },
  changeEmailAddress (state:ShareholdersForm, data: { index: number, value: string }) {
    state.shareholders[data.index].contactDetails.emailAddress = data.value
  },
  changePostalCode (state:ShareholdersForm, data: { index: number, value: string }) {
    state.shareholders[data.index].contactDetails.postalCode = data.value
  },
  changeHouseNumber (state:ShareholdersForm, data: { index: number, value: string }) {
    state.shareholders[data.index].contactDetails.houseNumber = data.value
  },
  changeComplement (state:ShareholdersForm, data: { index: number, value: string }) {
    state.shareholders[data.index].contactDetails.complement = data.value
  },
  changeStreetName (state:ShareholdersForm, data: { index: number, value: string }) {
    state.shareholders[data.index].contactDetails.streetName = data.value
  },
  changePlaceName (state:ShareholdersForm, data: { index: number, value: string }) {
    state.shareholders[data.index].contactDetails.placeName = data.value
  }
}
