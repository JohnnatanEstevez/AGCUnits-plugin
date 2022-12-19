import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css } from '@emotion/css';
import { stylesFactory } from '@grafana/ui';
import { coloresBase, dataUnidadesAGC, dataUnidadesAGC_FERNC } from 'helpers';
import UnidadesAGC from './components/UnidadesAGC';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const styles = getStyles(coloresBase, width, height);

  function valuesSeries(data: any) {
    let seriesUnique: any[] = []; //almacena las series con el nombre del refID
    let queries: any[] = [];
    data.series.forEach((serie: any) => {
      seriesUnique.push(serie.refId);
    });
    seriesUnique.forEach((serie) => {
      queries.push({ key: serie, values: [] });
    });
    data.series.forEach((serie: any) => {
      serie.fields.forEach((field: any) => {
        if (field.type === 'number') {
          queries
            .find((query) => query.key === serie.refId)
            .values.push({
              key: field?.name,
              [field?.name]: field.values.buffer[field.values.buffer.length - 1],
            });
        }
      });
    });

    return queries[0].values;
  }

  const dataLocal = dataUnidadesAGC;
  const dataInflux = valuesSeries(data);
  let dataMerged: any = [];

  //Fusiond de datos locales e Influx
  dataMerged = dataLocal.map((iteratorDatalocal) => {
    const _keysTemp = Object.values(iteratorDatalocal);
    let _dataMerged: any = { ...iteratorDatalocal };
    let _tempInflux = {};

    _keysTemp.map((iteratorKey) => {
      dataInflux.map((iteratorDataInflux: any) => {
        if (iteratorKey === iteratorDataInflux.key) {
          _tempInflux = { ..._tempInflux, ...iteratorDataInflux };
        }
        _dataMerged = { ..._dataMerged, ..._tempInflux };
      });
    });
    return _dataMerged;
  });

  //Renombrado de variables en los objetos
  const dataReestructured = dataMerged.map((iterator: any) => {
    const _keyAgcMode = iterator.agcMode;
    const _keyProgramedStatus = iterator.programedStatus;

    const agcMode = iterator[_keyAgcMode];
    const programedStatus = iterator[_keyProgramedStatus];

    const _objectRenamed = {
      agcMode,
      nameSub: iterator.nameSub,
      programedStatus,
      setPointAGC: iterator.setPointAGC,
      suministroAGC: iterator.suministroAGC,
    };
    return _objectRenamed;
  });

  const dataFinal = dataReestructured;

  return (
    <div className={styles.general_container}>
      <div className={styles.unidadesAGC_container}>
        <p className={styles.parrafo}>UNIDADES AGC</p>
        {dataFinal.map((iterator: any) => (
          <UnidadesAGC
            agcMode={iterator.agcMode}
            nameSub={iterator.nameSub}
            programedStatus={iterator.programedStatus}
            setPointAGC={iterator.setPointAGC}
            suministroAGC={iterator.suministroAGC}
          />
        ))}
      </div>
      <div className={styles.unidadesAGC_FERNC_container}>
        <p className={styles.parrafo}>UNIDADES AGC FERNC</p>
        {dataUnidadesAGC_FERNC.map((iterator) => (
          <UnidadesAGC
            agcMode={'N/A'}
            nameSub={iterator.nameSub}
            programedStatus={'N/A'}
            setPointAGC={'N/A'}
            suministroAGC={'N/A'}
          />
        ))}
      </div>
    </div>
  );
};

const getStyles = stylesFactory((coloresBase, width, height) => {
  return {
    general_container: css`
      overflow: auto;
      width: ${width}px;
      height: ${height}px;
      //background-color: ${coloresBase.gris_1};
      //padding: 6px 6px 6px 6px;
    `,
    parrafo: css`
      margin: 12px 0 12px 0;
      font-size: 14px;
      color: black;
      font-weight: 500;
    `,
    unidadesAGC_container: css`
      height: auto;
    `,
    unidadesAGC_FERNC_container: css`
      height: auto;
    `,
  };
});
