import React from "react";
import get from "lodash.get";
import id from "uuid/v1";

/**
 * Функция для отображения кастомного инпута
 *
 * @param {string} label текст для тэга label
 * @param {any} defaultValue начальное значение инпута
 * @param {string} type аттрибут типа инпута
 * @param {string} name имя инпута
 * @param {any} register регистратор для react hook form
 * @param {string} placeholder placeholder для инпута
 * @param {any} errors ошибки валидации react hook form
 * @param {booelan} autoFocus  автофокус на инпуте
 *
 */

interface CustomInputProps {
  label: string;
  defaultValue: any;
  type: string;
  name: string;
  register: any;
  placeholder: string;
  errors: any;
  autoFocus?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  defaultValue,
  type,
  name,
  register,
  placeholder,
  autoFocus,
  errors,
}) => {
  const inputId = `${name}_${id()}`;
  return (
    <div className="form-group">
      <label htmlFor={inputId}>{label}</label>
      <input
        {...register}
        defaultValue={defaultValue}
        name={name}
        type={type}
        className="form-control"
        id={inputId}
        placeholder={placeholder}
        autoFocus={autoFocus}
      />
      <div
        className={["invalid-feedback", errors?.name ?? "d-block"].join(" ")}
      >
        {get(errors, name)?.message}
      </div>
    </div>
  );
};

export default CustomInput;
