import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {Button} from '../../components/Button';

export const WelcomeScreen = () => {
  return (
    <ScrollView>
      <Button label="Block + Primary" primaryFirst />
      <Button label="Block + Primary" disabled={true} primaryFirst />
      <Button label="Block + Primary" primarySecond showArrowIcon={true} />
      <Button
        label="Block + Primary"
        disabled={true}
        primarySecond
        showArrowIcon={true}
      />
      <Button label="Block + Primary" primaryThird showMessageIcon={true} />
      <Button
        label="Block + Primary"
        disabled={true}
        primaryThird
        showMessageIcon={true}
      />
      <Button label="Block + Primary" primaryFourth onlyGap={true} />
      <Button
        label="Block + Primary"
        disabled={true}
        primaryFourth
        onlyGap={true}
      />

      <Button label="Block + Secondary" secondaryFirst />
      <Button label="Block + Secondary" disabled={true} secondaryFirst />
      <Button label="Block + Secondary" secondarySecond showArrowIcon={true} />
      <Button
        label="Block + Secondary"
        disabled={true}
        secondarySecond
        showArrowIcon={true}
      />
      <Button label="Block + Secondary" secondaryThird showMessageIcon={true} />
      <Button
        label="Block + Secondary"
        disabled={true}
        secondaryThird
        showMessageIcon={true}
      />
      <Button label="Block + Secondary" secondaryFourth onlyGap={true} />
      <Button
        label="Block + Secondary"
        disabled={true}
        secondaryFourth
        onlyGap={true}
      />
      <Button label="Block + Outline" outlineFirst />
      <Button label="Block + Outline" disabled={true} outlineFirst />
      <Button label="Block + Outline" outlineSecond showArrowIcon={true} />
      <Button
        label="Block + Outline"
        disabled={true}
        outlineSecond
        showArrowIcon={true}
      />
      <Button label="Block + Outline" outlineThird showMessageIcon={true} />
      <Button
        label="Block + Outline"
        disabled={true}
        outlineThird
        showMessageIcon={true}
      />
      <Button label="Block + Outline" outlineFourth onlyGap={true} />
      <Button
        label="Block + Outline"
        disabled={true}
        outlineFourth
        onlyGap={true}
      />
      <Button label="Block + Transparent" transparentFirst />
      <Button label="Block + Transparent" disabled={true} transparentFirst />
      <Button label="Block + Transparent" transparentFourth onlyGap={true} />
      <Button
        label="Block + Transparent"
        disabled={true}
        transparentFourth
        onlyGap={true}
      />
      <Button label="Large + Primary" primaryFirst large={true} />
      <Button
        label="Large + Primary"
        disabled={true}
        large={true}
        primaryFirst
      />
      <Button
        label="Large + Primary"
        primarySecond
        large={true}
        showArrowIcon={false}
        showMessage
      />
      <Button
        label="Large + Primary"
        disabled={true}
        primarySecond
        large={true}
        showArrowIcon={false}
        showMessage
      />
      <Button
        label="Large + Primary"
        primaryThird
        large={true}
        showMessageIcon={false}
        showArrow
      />
      <Button
        label="Large + Primary"
        disabled={true}
        primaryThird
        large={true}
        showMessageIcon={false}
        showArrow
      />

      <Button
        label="Large + Primary"
        primaryFourth
        onlyGap={true}
        large={true}
      />
      <Button
        label="Large + Primary"
        disabled={true}
        primaryFourth
        onlyGap={true}
        large={true}
      />

      <Button label="Large + Secondary" secondaryFirst large={true} />
      <Button
        label="Large + Secondary"
        disabled={true}
        secondaryFirst
        large={true}
      />
      <Button
        label="Large + Secondary"
        secondarySecond
        large={true}
        showArrowIcon={false}
        showMessage
      />
      <Button
        label="Large + Secondary"
        disabled={true}
        secondarySecond
        large={true}
        showArrowIcon={false}
        showMessage
      />
      <Button
        label="Large + Secondary"
        secondaryThird
        large={true}
        showMessageIcon={false}
        showArrow
      />
      <Button
        label="Large + Secondary"
        disabled={true}
        secondaryThird
        large={true}
        showMessageIcon={false}
        showArrow
      />
      <Button
        label="Large + Secondary"
        secondaryFourth
        onlyGap={true}
        large={true}
      />
      <Button
        label="Large + Secondary"
        disabled={true}
        secondaryFourth
        onlyGap={true}
        large={true}
      />

      <Button label="Large + Outline" outlineFirst large={true} />
      <Button
        label="Large + Outline"
        disabled={true}
        outlineFirst
        large={true}
      />
      <Button label="Large + Outline" outlineSecond large={true} showMessage />
      <Button
        label="Large + Outline"
        disabled={true}
        outlineSecond
        large={true}
        showMessage
      />
      <Button label="Large + Outline" outlineThird large={true} showArrow />
      <Button
        label="Large + Outline"
        disabled={true}
        outlineThird
        large={true}
        showArrow
      />
      <Button
        label="Large + Outline"
        outlineFourth
        onlyGap={true}
        large={true}
      />
      <Button
        label="Large + Outline"
        disabled={true}
        outlineFourth
        onlyGap={true}
        large={true}
      />
      <Button label="Large + Transparent" transparentFirst large={true} />
      <Button
        label="Large + Transparent"
        disabled={true}
        transparentFirst
        large={true}
      />
      <Button
        label="Large + Transparent"
        transparentFourth
        onlyGap={true}
        large={true}
      />
      <Button
        label="Large + Transparent"
        disabled={true}
        transparentFourth
        onlyGap={true}
        large={true}
      />

      <Button label="Small + Primary" primaryFirst smallSize />
      <Button label="Small + Primary" disabled={true} primaryFirst smallSize />
      <Button label="Small + Primary" primarySecond smallSize />
      <Button label="Small + Primary" disabled={true} primarySecond smallSize />
      <Button label="Small + Primary" primaryThird smallSize />
      <Button label="Small + Primary" disabled={true} primaryThird smallSize />
      <Button label="Small + Primary" primaryFourth onlyGap={true} smallSize />
      <Button
        label="Small + Primary"
        disabled={true}
        primaryFourth
        onlyGap={true}
        smallSize
      />
      <Button label="Small + Secondary" secondaryFirst smallSize />
      <Button
        label="Small + Secondary"
        disabled={true}
        secondaryFirst
        smallSize
      />
      <Button label="Small + Secondary" secondarySecond smallSize />
      <Button
        label="Small + Secondary"
        disabled={true}
        secondarySecond
        smallSize
      />
      <Button label="Small + Secondary" secondaryThird smallSize />
      <Button
        label="Small + Secondary"
        disabled={true}
        secondaryThird
        smallSize
      />
      <Button
        label="Small + Secondary"
        secondaryFourth
        onlyGap={true}
        smallSize
      />
      <Button
        label="Small + Secondary"
        disabled={true}
        secondaryFourth
        onlyGap={true}
        smallSize
      />

      <Button label="Small + Outline" outlineFirst smallSize />
      <Button label="Small + Outline" disabled={true} outlineFirst smallSize />
      <Button label="Small + Outline" outlineSecond smallSize />
      <Button label="Small + Outline" disabled={true} outlineSecond smallSize />
      <Button label="Small + Outline" outlineThird smallSize />
      <Button label="Small + Outline" disabled={true} outlineThird smallSize />
      <Button label="Small + Outline" outlineFourth onlyGap={true} smallSize />
      <Button
        label="Small + Outline"
        disabled={true}
        outlineFourth
        onlyGap={true}
        smallSize
      />

      <Button label="Large + Transparent" transparentFirst large={true} />
      <Button
        label="Large + Transparent"
        disabled={true}
        transparentFirst
        large={true}
      />
      <Button
        label="Large + Transparent"
        transparentFourth
        onlyGap={true}
        large={true}
      />
      <Button
        label="Large + Transparent"
        disabled={true}
        transparentFourth
        onlyGap={true}
        large={true}
      />

      <Text> Welcome Screen </Text>
    </ScrollView>
  );
};
