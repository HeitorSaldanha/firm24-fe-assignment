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
      }
    }
  ]
})

export const mutations = {
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
  }
}
