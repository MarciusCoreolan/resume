import { FC, useState } from 'react'

import {
  AccordionGroup,
  Button,
  ExampleContainer,
  Input,
  Select,
  SelectMulti,
  Checkbox,
} from 'components'

import { useAppDispatch } from 'shared/hooks/redux'
import { modalOpen } from 'store/slices/modals'

import { accordion_mock, select_options_mock } from 'shared/mocks/example_mocks'
import { OptionType } from 'components/Select/Select'
import Icon from '/public/assets/icons/example_icon.svg'

import s from './examplePage.module.scss'

export const ExamplePage: FC = () => {
  const [inputText, setInputText] = useState('')
  const dispatch = useAppDispatch()

  const [selectValue, setSelectValue] = useState<OptionType | null>(null)
  const [selectValueWithDefValue, setSelectValueWithDefValue] =
    useState<OptionType | null>(null)

  const [multiValue, setMultiValue] = useState<OptionType[] | null>(null)
  const [multiValueWithDefaultValue, setMultiValueWithDefaultValue] = useState<
    OptionType[] | null
  >(null)

  return (
    <div className={s.examplePage}>
      {/*// button //*/}
      <ExampleContainer title={'button'}>
        button with icon
        <Button onClick={() => {}}>
          <div>button</div> <Icon />
        </Button>
        <br />
        button without icon
        <Button onClick={() => {}}>button</Button>
      </ExampleContainer>
      {/*// input //*/}
      <ExampleContainer title={'input'}>
        default input without icon and label
        <Input
          placeholder={'placeholder'}
          value={inputText}
          onChange={event => {
            setInputText(event)
          }}
        />
        <br />
        input with icon and position icon right
        <Input
          placeholder={'placeholder'}
          value={inputText}
          onChange={event => {
            setInputText(event)
          }}
          icon={<Icon />}
          iconPosition='right'
        />
        <br />
        input with icon and position icon left
        <Input
          placeholder={'placeholder'}
          value={inputText}
          onChange={event => {
            setInputText(event)
          }}
          icon={<Icon />}
          iconPosition='left'
        />
        <br />
        input with error and label and with button
        <Input
          icon={<Button onClick={() => {}}>button</Button>}
          error={'something error'}
          label={'something label'}
          value={inputText}
          onChange={event => {
            setInputText(event)
          }}
        />
      </ExampleContainer>
      {/*// default select //*/}
      <ExampleContainer title={'default select'}>
        default select without reset button and arrow
        <Select
          options={select_options_mock}
          withArrow={false}
          resetButton={false}
          value={selectValue}
          onChange={setSelectValue}
        />
        <br />
        default select with default value
        <Select
          options={select_options_mock}
          defaultValue={1}
          value={selectValueWithDefValue}
          onChange={setSelectValueWithDefValue}
        />
        <br />
        default select without reset button but with arrow
        <Select
          options={select_options_mock}
          resetButton={false}
          value={selectValue}
          onChange={setSelectValue}
        />
        <br />
        default select with label and error
        <Select
          options={select_options_mock}
          label={'label'}
          error={'error'}
          value={selectValue}
          onChange={setSelectValue}
        />
        <br />
        default select with label bottom and error
        <Select
          options={select_options_mock}
          label={'label'}
          labelPosition={'bottom'}
          error={'error'}
          value={selectValue}
          onChange={setSelectValue}
        />
        <br />
        default select opened up
        <Select
          options={select_options_mock}
          value={selectValue}
          onChange={setSelectValue}
          openSide={'Top'}
        />
        <br />
      </ExampleContainer>
      {/*// multi select //*/}
      <ExampleContainer title={'multi select'}>
        multi select default
        <SelectMulti
          options={select_options_mock}
          value={multiValue}
          onChange={setMultiValue}
          error={'aaa'}
        />
        <br />
        multi select with error and label
        <SelectMulti
          options={select_options_mock}
          value={multiValue}
          onChange={setMultiValue}
          error={'error'}
          label={'label'}
        />
        <br />
        multi select with default value
        <SelectMulti
          options={select_options_mock}
          value={multiValueWithDefaultValue}
          onChange={setMultiValueWithDefaultValue}
          defaultValue={[1, 2, 3]}
        />
        <br />
        multi select opened up
        <SelectMulti
          options={select_options_mock}
          value={multiValue}
          onChange={setMultiValue}
          openSide='Top'
        />
        <br />
        multi select without arrow and clear cross
        <SelectMulti
          options={select_options_mock}
          value={multiValue}
          onChange={setMultiValue}
          withArrow={false}
          resetButton={false}
        />
        <br />
        multi select with label bottom and error up
        <SelectMulti
          options={select_options_mock}
          value={multiValue}
          onChange={setMultiValue}
          error={'something error text'}
          label={'label'}
          labelPosition='bottom'
        />
      </ExampleContainer>
      {/*// Accordion //*/}
      <ExampleContainer title={'accordion'}>
        <AccordionGroup data={accordion_mock} />
      </ExampleContainer>
      {/*// ModalViewer //*/}
      <ExampleContainer title={'Modals'}>
        <Button onClick={() => dispatch(modalOpen('modal'))}>
          Modal example 1
        </Button>
        <br />
        <Button onClick={() => dispatch(modalOpen('example2'))}>
          Modal example 2
        </Button>
      </ExampleContainer>
      {/*// checkbox //*/}
      <ExampleContainer title={'checkbox'}>
        квадратный чекбокс
        <Checkbox onChecked={value => console.log(value)} />
        <br />
        квадратный чекбокс с текстом
        <Checkbox onChecked={value => console.log(value)}>
          какой то текст
        </Checkbox>
        <br />
        квадратный чекбокс с текстом слева
        <Checkbox
          onChecked={value => console.log(value)}
          labelPosition={'left'}
        >
          какой то текст
        </Checkbox>
        <br />
        квадратный чекбокс с текстом сверху
        <Checkbox onChecked={value => console.log(value)} labelPosition={'top'}>
          какой то текст
        </Checkbox>
        <br />
        квадратный чекбокс с текстом снизу
        <Checkbox
          onChecked={value => console.log(value)}
          labelPosition={'bottom'}
        >
          какой то текст
        </Checkbox>
        <br />
        круглый чекбокс
        <Checkbox onChecked={value => console.log(value)} variant={'Circle'} />
        <br />
        toggle чекбокс
        <Checkbox onChecked={value => console.log(value)} variant={'Toggle'} />

      </ExampleContainer>
      add new components
    </div>
  )
}
