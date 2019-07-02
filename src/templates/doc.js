import React from "react"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import { MDXProvider } from "@mdx-js/react"

import Layout from "../components/layout"
import Sidebar from "../components/sidebar"

const items = [
  {
    link: "what-is-the-drupal-console",
    title: "What is the Drupal Console?",
    items: [
      {
        link: "about/why-should-you-care-about",
        title: "Why should you care about?"
      },
      {
        link: "about/how-does-drupal-console-help",
        title: "How does Drupal Console help?"
      },
      {
        link: "about/where-do-i-find-the-project",
        title: "Where do I find the project?"
      }
    ]
  },
  {
    link: "getting/project",
    title: "Getting the project",
    items: [
      {
        link: "getting/composer",
        title: "Using Composer"
      },
      {
        link: "getting/launcher",
        title: "Global executable aka Launcher"
      },
      {
        link: "getting/windows",
        title: "Installing on Windows"
      }
    ]
  },
  {
    link: "using/project",
    title: "Using the project",
    items: [
      {
        link: "using/how-to-copy-configuration-files",
        title: "How to copy configuration files"
      },
      {
        link: "using/how-to-download-install-and-serve-drupal8",
        title: "How to download, install and serve Drupal 8"
      },
      {
        link: "using/how-to-use-drupal-console-in-a-multisite-installation",
        title: "How to use Drupal Console in a multi-site installation"
      }
    ]
  },
  {
    link: "alias/using-site-alias",
    title: "Using site alias",
    items: [
      {
        link: "alias/setting-up-your-local-machine",
        title: "Setting up your local machine"
      },
      {
        link: "alias/how-to-use-drupal-console-in-a-remote-installation",
        title: "How to use Drupal Console in a remote installation"
      },
      {
        link: "alias/connecting-to-a-virtual-environment",
        title: "Connecting to a virtual environment"
      }
    ]
  },
  {
    link: "chains/what-is-a-chain-command",
    title: "What is a chain command",
    items: [
      {
        link: "chains/registering",
        title: "Registering chain commands as regular commands"
      },
      {
        link: "chains/listing-registered-commands",
        title: "Listing registered commands"
      }
    ]
  },
  {
    link: "extending/creating-custom-commands",
    title: "Creating custom Commands",
    items: [
      {
        link: "extending/the-command-class",
        title: "The Command Class"
      },
      {
        link: "extending/registering-commands",
        title: "Registering Commands"
      },
      {
        link: "extending/configuring-the-command",
        title: "Configuring the Command"
      },
      {
        link: "extending/command-lifecycle",
        title: "Command Lifecycle"
      },
      {
        link: "extending/getting-services-from-the-service-container",
        title: "Getting Services from the Service Container"
      },
      {
        link: "extending/generating-code",
        title: "Generating Code with a Command"
      }
    ]
  },
  {
    link: "contributing/new-features",
    title: "Contributing new features",
    items: [
      {
        link: "contributing/project-requirements",
        title: "Project requirements"
      },
      {
        link: "contributing/getting-the-project",
        title: "Getting the project"
      },
      {
        link: "contributing/running-the-project",
        title: "Running the project"
      },
      {
        link: "contributing/keeping-your-fork-up-to-date",
        title: "Keeping your fork up to date"
      },
      {
        link: "contributing/creating-issues-and-pull-requests",
        title: "Creating issues and pull requests"
      },
      {
        link: "contributing/documentation",
        title: "Contribute to this documentation"
      }
    ]
  },
  {
    link: "commands/available-commands",
    title: "Available commands"
  },
  {
    link: "drupal_console_faq/faq",
    title: "FAQ (Frequently Asked Questions) about Drupal Console",
    items: [
      {
        link: "drupal_console_faq/installation-problems",
        title: "Installation problems"
      },
      {
        link: "drupal_console_faq/permissions",
        title: "Permissions"
      },
      {
        link: "drupal_console_faq/commands-not-listed",
        title: "Commands not listed"
      },
      {
        link: "drupal_console_faq/interactive-mode",
        title: "Interactive Mode"
      }
    ]
  },
  {
    link: "references/links",
    title: "References"
  }
];

const Doc = (props) =>  {
  const post = props.data.mdx
  return (
    <Layout>
      <main className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xl-3">
              <Sidebar
                  items={items}
                  activePage={props.pageContext.slug}
                />
            </div>
            <div className="col-md-7 col-xl-8 ml-md-auto py-8">
              <MDXProvider>
                <MDXRenderer>{post.code.body}</MDXRenderer>
              </MDXProvider>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Doc


export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      code {
        body
      }
    }
  }
`