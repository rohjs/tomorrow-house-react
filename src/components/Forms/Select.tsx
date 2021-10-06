import React, {
  ChangeEvent,
  FocusEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from 'react'
import cx from 'classnames'

import { usePrevious } from 'src/hooks'

import { CaretIcon } from 'src/assets/images'
import { StyledFormControl, StyledSelectGroup } from './styles'

interface SelectProps {
  id: string | number
  options: SelectOption[]
  active?: boolean
  className?: string
  placeholder?: string
  disabled?: boolean
  multiple?: boolean
  required?: boolean
  selected?: string
  onBlur?: (e: FocusEvent<HTMLSelectElement>) => void
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
  onClick?: (e: MouseEvent<HTMLSelectElement>) => void
  onFocus?: (e: FocusEvent<HTMLSelectElement>) => void
}

export const Select: React.FC<SelectProps> = ({
  id,
  options,
  active,
  className,
  placeholder,
  disabled,
  multiple,
  required,
  selected,
  onBlur,
  onChange,
  onClick,
  onFocus,
}) => {
  const selectRef = useRef<HTMLSelectElement>(null)
  const prevSelected = usePrevious(selected)
  const [disableDefault, setDisableDefault] = useState(false)

  const handleBlur = (e: FocusEvent<HTMLSelectElement>) => {
    if (onBlur) onBlur(e)
    setDisableDefault(false)
  }

  const handleFocus = (e: FocusEvent<HTMLSelectElement>) => {
    if (onFocus) onFocus(e)
    setDisableDefault(true)
  }

  useEffect(() => {
    if (!!prevSelected && !selected) {
      if (selectRef?.current?.selectedIndex) selectRef.current.selectedIndex = 0
    }
  }, [prevSelected, selected])

  return (
    <StyledSelectGroup className={cx('selectGroup', { active })}>
      <StyledFormControl
        as="select"
        className={className}
        placeholder={placeholder}
        disabled={disabled}
        multiple={multiple}
        id={String(id)}
        name={String(id)}
        ref={selectRef}
        required={required}
        onBlur={handleBlur}
        onChange={onChange}
        onClick={onClick}
        onFocus={handleFocus}
      >
        <option value="" defaultChecked disabled={disableDefault}>
          {required ? placeholder : '추가상품 (선택)'}
        </option>
        {options.map((option, i) => {
          const key = `${option.value}-${id}-${i}`
          return (
            <option value={option.value} key={key} disabled={option.disabled}>
              {option.label}
            </option>
          )
        })}
      </StyledFormControl>
      <CaretIcon className="icon" />
    </StyledSelectGroup>
  )
}
