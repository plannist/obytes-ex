import { Stack, useRouter } from 'expo-router';
import * as React from 'react';
import { Button } from 'react-native-sj-prime-base';

import { View } from '@/components/ui';

const Test = () => {
  const router = useRouter();
  return (
    <>
      <Stack.Screen
        options={{
          title: 'prime-base 테스트화면',
          headerBackTitle: '',
        }}
      />
      <View className="flex-1 p-4 ">
        <Button
          text={'버튼 테스트'}
          variant={'primaryLow'}
          shape={'round'}
          height={'h-[56px]'}
          onPress={() => {
            router.push('/feed/add-post'); //스텍에 정보를 쌓는다 뒤로가기시 지금 페이지로 이동
            // router.replace('/feed/add-post'); //스텍에 정보를 쌓지 않는다. 뒤로가기시 전전페이지 이동
          }}
        />
      </View>
    </>
  );
};

export default Test;
