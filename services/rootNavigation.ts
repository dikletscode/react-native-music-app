import React, {RefObject} from 'react';
export const navigationRef: RefObject<any> = React.createRef();
export function navigate(name: string) {
  navigationRef.current?.navigate(name);
}
