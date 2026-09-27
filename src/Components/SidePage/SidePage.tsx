import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "#/redux/store/store"
import { initialState, removeSideParams } from "#/redux/slices/sideSlice"
import { ISideParams } from "#/types/general"
import { cubeSideParams } from "#/utils/params"
import style from "./SidePage.module.css"


export const SidePage = () => {
  const sideParams = useSelector((state: RootState) => state.sideParams)
  const [params, setParams] = useState<ISideParams>(initialState)
  const [borderColor, setBorderColor] = useState('')
  const dispatch: AppDispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (sideParams.id == null) return
    setParams({
      id: sideParams.id, 
      uuid: sideParams.uuid,
      text: `Сторона ${sideParams.text}`,
      top: sideParams.top,
      left: sideParams.left,
    })
    setBorderColor(cubeSideParams[sideParams.id as number].color)
  }, [])

  const handleClose = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (!e.target) return
    dispatch(removeSideParams())
    navigate(`/dynamic-cube`)
  }


  return (
    <div className={style.circle__page__wrapper}>
      <div className={style.circle__page__content}>
        <p>
          ID элемента: <span>{params.id}</span>
        </p>
        <p>
          Левый отступ клика от родителя: <span>{params.left}</span> px
        </p>
        <p>
          Верхний отступ клика от родителя: <span>{params.top}</span> px
        </p>
        <p>
          UUID стороны: <span>{params.uuid}</span>
        </p>
        <p>
          Текст стороны: <span>{params.text}</span>
        </p>
      </div>
      <button 
        className={style.circle__page__button}
        onClick={handleClose}
      >
        назад
      </button>
      <div 
        className={style.circle__item}
        style={{
          left: `${sideParams.left}px`, 
          top: `${sideParams.top}px`,
          borderColor: `${borderColor}`,
        }}
      >
      </div>
    </div>
  )
}
