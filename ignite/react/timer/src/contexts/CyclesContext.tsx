import { createContext, useReducer, useState, type ReactNode } from "react";

interface CreateCycleData {
  task: string;
  minutesAmount: number
}

export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
  createNewCycle: (data: CreateCycleData) => void;
  interruptCurrentCycle: () => void;
}

interface CycleState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export const CyclesContext = createContext({} as CyclesContextType)

export function CyclesContextProvider({ children }: { children: ReactNode }) {
  const [cyclesState, dispatch] = useReducer((state: CycleState, action: any) => {
    switch (action.type) {
      case "ADD_NEW_CYCLE":
        return {
          ...state,
          cycles: [...state.cycles, action.payload.newCycle],
          activeCycleId: action.payload.newCycle.id
        }
      case "INTERRUPT_CURRENT_CYCLE":
        return {
          ...state,
          cycles: state.cycles.map(cycle => {
            if (cycle.id === state.activeCycleId) {
              return { ...cycle, interruptedDate: new Date() }
            } else {
              return cycle
            }
          }),
          activeCycleId: null
        }
      case "MARK_CURRENT_CYCLE_AS_FINISHED":
        return {
          ...state,
          cycles: state.cycles.map(cycle => {
            if (cycle.id === state.activeCycleId) {
              return { ...cycle, finishedDate: new Date() }
            } else {
              return cycle
            }
          }),
        }
      default:
        return state
    }
  }, {
    cycles: [],
    activeCycleId: null
  })

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  function createNewCycle(data: CreateCycleData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date()
    }

    dispatch({
      type: "ADD_NEW_CYCLE",
      payload: {
        newCycle
      }
    })

    // setCycles(prevState => [...prevState, newCycle])
    setAmountSecondsPassed(0)
  }

  function markCurrentCycleAsFinished() {
    //   setCycles(prevState => prevState.map(cycle => {
    //     if (cycle.id === activeCycleId) {
    //       return { ...cycle, finishedDate: new Date() }
    //     }
    //     return cycle
    //   }))
    dispatch({
      type: "MARK_CURRENT_CYCLE_AS_FINISHED",
      payload: {
        activeCycleId
      }
    })
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function interruptCurrentCycle() {
    dispatch({
      type: "INTERRUPT_CURRENT_CYCLE",
      payload: {
        activeCycleId
      }
    })
  }

  return (
    <CyclesContext.Provider value={{
      cycles,
      activeCycle,
      activeCycleId,
      amountSecondsPassed,
      markCurrentCycleAsFinished,
      setSecondsPassed,
      createNewCycle,
      interruptCurrentCycle
    }}
    >
      {children}
    </CyclesContext.Provider>
  )
}