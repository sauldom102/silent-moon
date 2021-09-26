import React, { FC } from 'react';
import { StatusBar } from 'components';
import useConnect from './connect';
import Question from './Question';
import {
  Container,
  DatePicker,
  WeekDayPicker,
  Button,
  SecondaryButton,
} from './styles';
import { Props } from './types';

const Reminders: FC<Props> = () => {
  const { safeTop, safeBottom, control, submit, isValid, handlePressCancel } =
    useConnect();

  return (
    <Container safeTop={safeTop} safeBottom={safeBottom}>
      <StatusBar />
      <Question
        title="What time would you like to meditate?"
        subtitle="Any time you can choose but We recommend first thing in th morning."
      />
      <DatePicker name="time" control={control} mode="time" />
      <Question
        title="Which day would you like to meditate?"
        subtitle="Everyday is best, but we recommend picking at least five."
      />
      <WeekDayPicker name="days" control={control} />
      <Button title="Save" onPress={submit} enabled={isValid} />
      <SecondaryButton title="No thanks" onPress={handlePressCancel} />
    </Container>
  );
};

export default Reminders;
