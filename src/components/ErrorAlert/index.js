import React from 'react';
import { useMyContext } from '../../Context';

export default function ErrorAltert() {
  const { apiError } = useMyContext();

  return apiError && <h3>Ops, não conseguimos encontrar nenhum planeta</h3>;
}
