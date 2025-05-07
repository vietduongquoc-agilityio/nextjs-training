import React, { Suspense } from 'react';

const fetchData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Dữ liệu đã được tải');
    }, 2000);
  });
};

const DataComponent = React.lazy(() => fetchData().then(data => {
  return { default: () => <div>{data}</div> };
}));

const MyComponent = () => {
  return (
    <Suspense fallback={<div>Đang tải...</div>}>
      <DataComponent />
    </Suspense>
  );
};

export default MyComponent;
