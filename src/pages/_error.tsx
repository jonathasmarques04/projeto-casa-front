import React from 'react';
import { NextPageContext } from 'next';

interface ErrorProps {
  statusCode: number;
}

const ErrorPage: React.FC<ErrorProps> = ({ statusCode }) => {
  return (
    <div>
      <p>{statusCode ? `Erro ${statusCode}` : 'Um erro ocorreu no servidor'}</p>
    </div>
  );
};

export async function getServerSideProps({ res, err }: NextPageContext) {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { props: { statusCode } };
}

export default ErrorPage;