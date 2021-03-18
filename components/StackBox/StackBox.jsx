import s from './StackBox.module.css'

export default function StackBox({ children }) {
  return (
    <div className={s.stackbox}>
      { children }
    </div>
  )
}