import React from 'react';
import { css } from '@emotion/css';
import { stylesFactory } from '@grafana/ui';
import { coloresBase } from 'helpers';

interface Props {
  agcMode: any;
  nameSub: any;
  programedStatus: any;
  setPointAGC: any;
  suministroAGC: any;
}
const UnidadesAGC: React.FC<Props> = ({ agcMode, nameSub, programedStatus, setPointAGC, suministroAGC }) => {
  const styles = getStyles(agcMode, programedStatus, setPointAGC, suministroAGC);

  return (
    <div className={styles.content_container}>
      <div className={styles.indicator_remote_container}>
        <p className={styles.parrafo}>{agcMode === 1 ? 'R' : 'L'}</p>
      </div>
      <div className={styles.name_container}>
        <p className={styles.parrafo_name}>{nameSub}</p>
      </div>
      <div className={styles.indicator_program_container}>
        <p className={styles.parrafo}>{programedStatus === 1 ? 'P' : 'NP'}</p>
      </div>
      <div className={styles.modo_container}>
        <p className={styles.parrafo}>SRe</p>
      </div>
    </div>
  );
};

const getStyles = stylesFactory((agcMode, programedStatus, setPointAGC, suministroAGC) => {
  return {
    content_container: css`
      display: flex;
      justify-content: space-between;
      margin-bottom: 6px;
      //overflow: auto;
    `,
    parrafo: css`
      margin: 1px 6px 1px 6px;
    `,
    parrafo_name: css`
      margin: 0;
    `,
    indicator_remote_container: css`
      display: flex;
      justify-content: center;
      color: ${coloresBase.blanco};
      background-color: ${agcMode === 1 ? coloresBase.gris_4 : coloresBase.azul};
      font-weight: 700;
      font-size: 18px;
      width: 10%;
    `,
    name_container: css`
      display: flex;
      justify-content: center;
      color: ${coloresBase.gris_4};
      font-weight: 500;
      font-size: 18px;
      width: 40%;
    `,
    indicator_program_container: css`
      display: flex;
      justify-content: center;
      color: ${coloresBase.blanco};
      background-color: ${programedStatus === 1 ? coloresBase.gris_4 : coloresBase.azul};
      font-weight: 700;
      min-width: 43px;
      font-size: 18px;
      margin-left: 6px;
      width: 13%;
    `,
    modo_container: css`
      display: flex;
      justify-content: center;
      color: ${coloresBase.blanco};
      background-color: ${setPointAGC - suministroAGC < 5 && setPointAGC - suministroAGC > -5
        ? coloresBase.gris_4
        : coloresBase.naranja};
      font-weight: 700;
      font-size: 18px;
      width: 15%;
    `,
  };
});

export default UnidadesAGC;
