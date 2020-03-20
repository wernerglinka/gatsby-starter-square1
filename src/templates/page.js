import React from 'react';
import {graphql} from 'gatsby';
import mdStringToHTML from "../utilities/md-to-html";

import components, {Layout} from '../components/index';



/** ***************************************************************************
 *  Home page
 *************************************************************************** */

 const Page = props => {
   const fields = props.data.markdownRemark.frontmatter;
   const pageSections = fields.sections;
  
   console.log(pageSections);
  return (
    <Layout>
      <h1>{fields.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: mdStringToHTML(fields.prose) }} />
      
      {pageSections.map(section => {
        const SectionComponent = components[section.component];
        return (
          <SectionComponent key={section.section_id} info={section} />
        )
      })} 
    </Layout>
  );  
}

export const pageQuery = graphql`
  
  query PagesByID($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      frontmatter {
        title
        prose
        sections {
          type
          template
          title
          section_id
          content
          component
        }
      }
    }
  }
`;

export default Page;