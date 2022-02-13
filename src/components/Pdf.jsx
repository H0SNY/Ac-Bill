import React from 'react'
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font
} from '@react-pdf/renderer'
import { getHeaders, getElements, getResults } from '../ops'
import font from '../assets/Cairo-VariableFont_wght.ttf'
// Create styles
Font.register({
  family: 'Cairo',
  src: font
})
const styles = StyleSheet.create({
  font: {
    fontFamily: 'Cairo' , 
    fontSize : 10
  },
  flex: {
    display: 'flex',
    backgroundColor: '#E4E4E4'
  },
  row: {
    flexDirection: 'row'
  },
  col: {
    flexDirection: 'column'
  },
  justify_center: {
    justifyContent: 'center'
  },
  justify_evenly: {
    justifyContent: 'space-evenly'
  },
  justify_around: {
    justifyContent: 'space-around'
  },
  justify_between: {
    justifyContent: 'space-between'
  },

  rounded_xs: {
    borderRadius: 0.5
  },
  rounded_sm: {
    borderRadius: 1
  },
  rounded_md: {
    borderRadius: 2
  },
  rounded_lg: {
    borderRadius: 3
  },
  rounded_xlg: {
    borderRadius: 4
  },
  rounded_full: {
    borderRadius: 10
  },
  items_start: {
    alignItems: 'flex-start'
  },
  items_end: {
    alignItems: 'flex-end'
  },
  items_center: {
    alignItems: 'center'
  },
  basis_1_12: {
    width: 0.083
  },
  basis_2_12: {
    width: 0.166
  },
  basis_3_12: {
    width: 0.25
  },
  basis_4_12: {
    width: 0.333
  },
  basis_5_12: {
    width: 0.416
  },
  basis_6_12: {
    width: 0.5
  },
  basis_7_12: {
    width: 0.583
  },
  basis_8_12: {
    width: 0.666
  },
  basis_9_12: {
    width: 0.75
  },
  basis_10_12: {
    width: 0.833
  },
  basis_11_12: {
    width: 0.916
  },
  w_full: {
    width: 1
  },

  p_1: {
    padding: 2
  },
  p_2: {
    padding: 4
  },
  p_3: {
    padding: 6
  },
  p_4: {
    padding: 8
  },
  p_5: {
    padding: 10
  },
  p_6: {
    padding: 14
  },
  p_7: {
    padding: 18
  },
  p_8: {
    padding: 20
  },
  p_9: {
    padding: 30
  },
  p_10: {
    padding: 40
  },
  m_1: {
    margin: '0.2rem'
  },
  m_2: {
    margin: '0.4rem'
  },
  m_3: {
    margin: '0.6rem'
  },
  m_4: {
    margin: '0.8rem'
  },
  m_5: {
    margin: '1rem'
  },
  m_6: {
    margin: '1.4rem'
  },
  m_7: {
    margin: '1.8rem'
  },
  m_8: {
    margin: '2.2rem'
  },
  m_9: {
    margin: '2.5rem'
  },
  m_10: {
    margin: '3rem'
  },
  text_center: {
    textAlign: 'center'
  },
  headerRoot: {
    width: 600
  },
  element: {
    width: 140 , 
    border : 2 , 
    borderRadius : 5
  },
  header: {
    width: 200
  },
  elementsRoot: {
    width: 595 , 
    backgroundColor : "tomato"
  },
  elementRoot: {
    width: 290 ,
    marginRight : 5 , 
    marginLeft : 5 , 
    justifyContent : "flex-start" , 
    height : 500 , 

    
  }
})

/*
Save in a file
import ReactPDF from '@react-pdf/renderer';
ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);
*/

/*
Render to a stream
import ReactPDF from '@react-pdf/renderer';
ReactPDF.renderToStream(<MyDocument />);
*/

/*
Render in DOM
import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';

const App = () => (
  <PDFViewer>
    <MyDocument />
  </PDFViewer>
);
ReactDOM.render(<App />, document.getElementById('root'));
*/

// Create Document Component
export default function Pdf({ headerNodes }) {
  const { headers, elements, results } = headerNodes
  console.log(elements)
  const renderRow = children => {
    return <View>{children}</View>
  }
  const renderHeader = header => {
    return (
      <View
        key={header[0] + header[1]}
        style={[
          styles.flex,
          styles.row,
          styles.headerRoot,
          styles.text_center,
          styles.justify_evenly
        ]}
      >
        <View
          style={[
            styles.header,
            styles.flex,
            styles.col,
            styles.justify_center,
            styles.items_center,
            styles.text_center
          ]}
        >
          <Text style={[styles.text_center]}>{header[1]}</Text>
        </View>
        <View
          style={[
            styles.header,
            styles.flex,
            styles.col,
            styles.justify_center,
            styles.items_center,
            styles.text_center
          ]}
        >
          <Text style={[styles.text_center]}>{header[0]}</Text>
        </View>
      </View>
    )
  }

  const renderElement = element => {
    return (
      <View
        key={element[0] + element[1]}
        style={[
          styles.flex,
          styles.row,
          styles.text_center,
          styles.justify_evenly , 
          styles.p_5
        ]}
      >
        <View
          style={[
            styles.element,
            styles.flex,
            styles.col,
            styles.justify_center,
            styles.items_center,
            styles.text_center
          ]}
        >
          <Text style={[styles.text_center]}>{element[1]}</Text>
        </View>
        <View
          style={[
            styles.element,
            styles.flex,
            styles.col,
            styles.justify_center,
            styles.items_center,
            styles.text_center
          ]}
        >
          <Text style={[styles.text_center]}>{element[0]}</Text>
        </View>
      </View>
    )
  }

  const headerComponent = []
  for (let i = 0; i < headers.length; i = i + 3) {
    headerComponent.push(renderRow(headers.slice(i, i + 3).map(renderHeader)))
  }
  const kema = "قيمة";
  const masrof = "أسم المصروف"
  return (
    //eslint disable
    <Document language="ar" title="كشف حساب">
      <Page size="A4" style={[styles.w_full]}>
        <View
          style={[styles.font, styles.flex, styles.col, styles.items_center]}
        >
          {headers.map(renderHeader)}
        </View>
        <View
          style={[styles.elementsRoot , styles.font, styles.flex, styles.row, styles.items_center]}
        >
        <View
          style={[
            styles.elementRoot,
            styles.font,
            styles.flex,
            styles.col,
            styles.items_center
          ]}
        >
          {renderElement([masrof , kema])}
          {elements.slice(0, (elements.length / 2) - 1).map(renderElement)}
        </View>
        <View
          style={[
            styles.elementRoot,
            styles.font,
            styles.flex,
            styles.col,
            styles.items_center , 
          ]}
        >
           {renderElement([masrof , kema])}
          {elements
            .slice((elements.length / 2) - 1, elements.length)
            .map(renderElement)}
        </View>
        
        </View>
        <View style={styles.font}>
          {renderElement(["الأجمالى" , results])}
        </View>
       
      </Page>
    </Document>
  )
}
