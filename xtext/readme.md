# *FSML EMF/XText*
*FSML* is a domain specific language for *Finite State Machines*, *FSML EMF/XText* provides tools for editing such finite state machines and their input.
## Setup *Eclipse*
* If you do not have an *Eclipse Modeling Tools* installation, go to [*Eclipse* download page](http://www.eclipse.org/downloads/) and download and install: `Eclipse Modeling Tools`
* Start *Eclipse*
* Go to *Eclipse Marketplace* under `Help > Eclipse Marketplace...`
  * Install `XText 2.10` 

## Import and run the Code
* Go to `File > Import... > General > Existing Projects into Workspace` and import the `org.softlang.metalib.xtext.fsml` and `org.softlang.metalib.xtext.fsml.*` projects. Wait for *Eclipse* to index and build all the projects.  
* Go to `Run > Run Configurations...` and create a new Eclipse Application. Hereafter, press the *Run* button. The new *Eclipse* starting up now contains all the plugins required to edit and view the *FSML* files.  

## Work with the Editor
### Setting up a Project
* In the new *Eclipse Application*, create a new *Java Project* and configure it as *Plug-in Project*.
* If you wan to use the *Java* classes, go to the `MANIFEST.MF` and add `org.softlang.metalib.xtext.fsml` as a *Required Plug-in* under the *Dependencies* tab.

### Working with *FSML* Files
![fsmling](https://f.cloud.github.com/assets/5929561/1878835/22abbc76-7941-11e3-89a0-279a55c581db.gif)
* Create or add any file with a `.fsml` extension and open it. 
* If *Eclipse* asks you if it should add the *XText Nature* click yes.

### Working with the generated *Java* Classes
* A `src-gen` folder will be created as soon as any `.fsml` file is valid.
* To use the generated *Java* classes, add `src-gen` to the build path by right-clicking and selecting `Build Path > Use as Source Folder`. 
