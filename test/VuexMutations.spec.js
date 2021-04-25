import { mutations } from '~/store/shareholdersForm'

const {
  open,
  loadShareholders,
  addShareholder,
  removeShareholder,
  changeStep,
  toggleNaturalPerson,
  toggleFluent,
  toggleResident,
  toggleDirector,
  changeSalutation,
  changeFirstName,
  changeSurname,
  changeDateOfBirth,
  changeCountryOfBirth,
  changeTelephoneNumber,
  changeEmailAddress,
  changePostalCode,
  changeHouseNumber,
  changeComplement,
  changeStreetName,
  changePlaceName
} = mutations

describe('Shareholders Mutations', () => {
  test('open', () => {
    const state = { isOpen: 0 }
    open(state, 1)
    expect(state.isOpen).toBe(1)
  })
  test('loadShareholders', () => {
    const state = {
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
    }
    const loadedData = [
      {
        title: 'Shareholder 1 (applicant)',
        currentFormStep: 0,
        generalData: {
          naturalPerson: true,
          fluent: true,
          resident: false,
          director: false
        },
        personalData: {
          salutation: 'Mr.',
          firstName: 'Nicol',
          surname: 'Bolas',
          dateOfBirth: new Date('06/01/1994'),
          countryOfBirth: 'Dominaria'
        },
        contactDetails: {
          telephoneNumber: '987654321',
          emailAddress: 'realnicolbolas@wizards.com',
          postalCode: '55555',
          houseNumber: '10',
          complement: '3rd Circle',
          streetName: 'Grixs Street',
          placeName: 'Ravinica'
        }
      },
      {
        title: 'Shareholder 2',
        currentFormStep: 0,
        generalData: {
          naturalPerson: false,
          fluent: false,
          resident: true,
          director: true
        },
        personalData: {
          salutation: 'Mr.',
          firstName: 'Jon',
          surname: 'Doe',
          dateOfBirth: new Date('06/01/1975'),
          countryOfBirth: 'Brazil'
        },
        contactDetails: {
          telephoneNumber: '123456789',
          emailAddress: 'jon@doe.com',
          postalCode: '111111',
          houseNumber: '5',
          complement: '2nd Floor',
          streetName: 'Doe Street',
          placeName: 'Jonsvile'
        }
      }
    ]
    loadShareholders(state, loadedData)
    expect(state.shareholders).toBe(loadedData)
  })
  test('addShareholder', () => {
    const state = {
      shareholders: [
        {
          title: 'Shareholder 1 (applicant)',
          currentFormStep: 0,
          generalData: {
            naturalPerson: true,
            fluent: true,
            resident: false,
            director: false
          },
          personalData: {
            salutation: 'Mr.',
            firstName: 'Nicol',
            surname: 'Bolas',
            dateOfBirth: new Date('06/01/1994'),
            countryOfBirth: 'Dominaria'
          },
          contactDetails: {
            telephoneNumber: '987654321',
            emailAddress: 'realnicolbolas@wizards.com',
            postalCode: '55555',
            houseNumber: '10',
            complement: '3rd Circle',
            streetName: 'Grixs Street',
            placeName: 'Ravinica'
          }
        }
      ]
    }
    const shareholder = {
      title: 'Shareholder 2',
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
        dateOfBirth: null,
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
    const shareholders = [...state.shareholders, shareholder]
    addShareholder(state)
    expect(state.shareholders).toStrictEqual(shareholders)
  })
  test('removeShareholder', () => {
    const state = {
      shareholders: [
        {
          title: 'Shareholder 1 (applicant)',
          currentFormStep: 0,
          generalData: {
            naturalPerson: true,
            fluent: true,
            resident: false,
            director: false
          },
          personalData: {
            salutation: 'Mr.',
            firstName: 'Nicol',
            surname: 'Bolas',
            dateOfBirth: new Date('06/01/1994'),
            countryOfBirth: 'Dominaria'
          },
          contactDetails: {
            telephoneNumber: '987654321',
            emailAddress: 'realnicolbolas@wizards.com',
            postalCode: '55555',
            houseNumber: '10',
            complement: '3rd Circle',
            streetName: 'Grixs Street',
            placeName: 'Ravinica'
          }
        },
        {
          title: 'Shareholder 2',
          currentFormStep: 0,
          generalData: {
            naturalPerson: false,
            fluent: false,
            resident: true,
            director: true
          },
          personalData: {
            salutation: 'Mr.',
            firstName: 'Jon',
            surname: 'Doe',
            dateOfBirth: new Date('06/01/1975'),
            countryOfBirth: 'Brazil'
          },
          contactDetails: {
            telephoneNumber: '123456789',
            emailAddress: 'jon@doe.com',
            postalCode: '111111',
            houseNumber: '5',
            complement: '2nd Floor',
            streetName: 'Doe Street',
            placeName: 'Jonsvile'
          }
        }
      ]
    }
    const shareholders = [state.shareholders[0]]
    removeShareholder(state, 1)
    expect(state.shareholders).toStrictEqual(shareholders)
  })
  test('changeStep', () => {
    const state = {
      shareholders: [{
        currentFormStep: 0
      }]
    }
    changeStep(state, { index: 0, step: 1 })
    expect(state.shareholders[0].currentFormStep).toBe(1)
  })
  test('toggleNaturalPerson', () => {
    const state = {
      shareholders: [{
        generalData: {
          naturalPerson: false
        }
      }]
    }
    toggleNaturalPerson(state, { index: 0, value: true })
    expect(state.shareholders[0].generalData.naturalPerson).toBe(true)
  })
  test('toggleFluent', () => {
    const state = {
      shareholders: [{
        generalData: {
          fluent: false
        }
      }]
    }
    toggleFluent(state, { index: 0, value: true })
    expect(state.shareholders[0].generalData.fluent).toBe(true)
  })
  test('toggleResident', () => {
    const state = {
      shareholders: [{
        generalData: {
          resident: false
        }
      }]
    }
    toggleResident(state, { index: 0, value: true })
    expect(state.shareholders[0].generalData.resident).toBe(true)
  })
  test('toggleDirector', () => {
    const state = {
      shareholders: [{
        generalData: {
          director: false
        }
      }]
    }
    toggleDirector(state, { index: 0, value: true })
    expect(state.shareholders[0].generalData.director).toBe(true)
  })
  test('changeSalutation', () => {
    const state = {
      shareholders: [{
        personalData: {
          salutation: ''
        }
      }]
    }
    changeSalutation(state, { index: 0, value: 'Mr.' })
    expect(state.shareholders[0].personalData.salutation).toBe('Mr.')
  })
  test('changeFirstName', () => {
    const state = {
      shareholders: [{
        personalData: {
          firstName: ''
        }
      }]
    }
    changeFirstName(state, { index: 0, value: 'Nicol' })
    expect(state.shareholders[0].personalData.firstName).toBe('Nicol')
  })
  test('changeSurname', () => {
    const state = {
      shareholders: [{
        personalData: {
          surname: ''
        }
      }]
    }
    changeSurname(state, { index: 0, value: 'Doe' })
    expect(state.shareholders[0].personalData.surname).toBe('Doe')
  })
  test('changeDateOfBirth', () => {
    const state = {
      shareholders: [{
        personalData: {
          dateOfBirth: ''
        }
      }]
    }
    const date = new Date('0')
    changeDateOfBirth(state, { index: 0, value: '0' })
    expect(state.shareholders[0].personalData.dateOfBirth).toStrictEqual(date)
  })
  test('changeCountryOfBirth', () => {
    const state = {
      shareholders: [{
        personalData: {
          countryOfBirth: ''
        }
      }]
    }
    changeCountryOfBirth(state, { index: 0, value: 'Brazil' })
    expect(state.shareholders[0].personalData.countryOfBirth).toBe('Brazil')
  })
  test('changeTelephoneNumber', () => {
    const state = {
      shareholders: [{
        contactDetails: {
          telephoneNumber: ''
        }
      }]
    }
    changeTelephoneNumber(state, { index: 0, value: '123456789' })
    expect(state.shareholders[0].contactDetails.telephoneNumber).toBe('123456789')
  })
  test('changeEmailAddress', () => {
    const state = {
      shareholders: [{
        contactDetails: {
          emailAddress: ''
        }
      }]
    }
    changeEmailAddress(state, { index: 0, value: 'jon@doe.com' })
    expect(state.shareholders[0].contactDetails.emailAddress).toBe('jon@doe.com')
  })
  test('changePostalCode', () => {
    const state = {
      shareholders: [{
        contactDetails: {
          postalCode: ''
        }
      }]
    }
    changePostalCode(state, { index: 0, value: '12345' })
    expect(state.shareholders[0].contactDetails.postalCode).toBe('12345')
  })
  test('changeHouseNumber', () => {
    const state = {
      shareholders: [{
        contactDetails: {
          houseNumber: ''
        }
      }]
    }
    changeHouseNumber(state, { index: 0, value: '50' })
    expect(state.shareholders[0].contactDetails.houseNumber).toBe('50')
  })
  test('changeComplement', () => {
    const state = {
      shareholders: [{
        contactDetails: {
          complement: ''
        }
      }]
    }
    changeComplement(state, { index: 0, value: '2nd floor' })
    expect(state.shareholders[0].contactDetails.complement).toBe('2nd floor')
  })
  test('changeStreetName', () => {
    const state = {
      shareholders: [{
        contactDetails: {
          streetName: ''
        }
      }]
    }
    changeStreetName(state, { index: 0, value: 'jondoe street' })
    expect(state.shareholders[0].contactDetails.streetName).toBe('jondoe street')
  })
  test('changePlaceName', () => {
    const state = {
      shareholders: [{
        contactDetails: {
          placeName: ''
        }
      }]
    }
    changePlaceName(state, { index: 0, value: 'Jondoevile' })
    expect(state.shareholders[0].contactDetails.placeName).toBe('Jondoevile')
  })
})
