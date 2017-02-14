# *FSML EMF/XText*
*FSML* is a domain specific language for *Finite State Machines*, *FSML EMF/XText* provides tools for editing such finite state machines and their input.
## Preface
Due to the high integration with *Eclipse* and existing editor and transformation frameworks, the *FSML EMF/XText* has no simple build script or makefile, but a somewhat extensive setup progress.  
## Setup *Eclipse*
* If you do not have an *Eclipse Modeling Tools* installation, go to [*Eclipse* download page](http://www.eclipse.org/downloads/) and download and install: `Eclipse Modeling Tools`
* Start *Eclipse*
* Go to the `Help > Install New Software...`
  * From the [*XText* update site](http://download.eclipse.org/modeling/tmf/xtext/updates/composite/releases/) install `Xtext-2.4.3`
  * From the [*Itemis* update site](http://download.itemis.de/updates/) install `Xtext Antlr-2.0.0`
* Go to *Eclipse Marketplace* under `Help > Eclipse Marketplace...`
  * Install `ATL 3.3` 
  * Install `ATL/EMFTVM`
* Go to `Help > Install Modeling Components`
  * Install `Papyrus UML (Incubation)`

## Import and run the Code
* Go to `File > Import... > General > Existing Projects into Workspace` and import the `sle.fsml` and `sle.fsml.*` projects. Wait for *Eclipse* to index and build all the projects.  
* Run a new *Eclipse Application* by clicking on the `sle.fsml` project root and selecting `Run > Run`. The new *Eclipse* now contains all the plugins required to edit and view the *FSML* files.  


## Work with the Editor
### Setting up a Project
* In the new *Eclipse Application*, create a new *Plug-in Project*.
* If you wan to use the *Java* clases, go to the `MANIFEST.MF` and add `sle.fsml` as a *Required Plug-in* or `sle.fsml.runtime` as an *Imported Package* under the *Dependencies* tab.

### Working with *FSML* Files
![fsmling](https://f.cloud.github.com/assets/5929561/1878835/22abbc76-7941-11e3-89a0-279a55c581db.gif)
* Create or add any file with a `.fsml` or `.input` extension and open it. 
* If *Eclipse* asks you if it should add the *XText Nature* click yes.

### Working with the generated *Java* Classes
* A `src-gen` folder will be created as soon as any `.fsml` file is valid. 
* To use the generated *Java* classes, add `src-gen` to the build path by right-clicking and selecting `Build Path > Use as Source Folder`. 

### Simulating a *FSM*
* To simulate a *FSM*, go to `Run > Run Configurations...` and create a new *FSML Simulation* and fill out the *Simulation* tab.
* If you have `Write to console` selected, launching the *Run Configruation* will open a new console window in *Eclipse* displaying the output of the simulation or pop up a message box displaying run errors like the invalid or infeasible input exceptions.
* If you select `Write to file`, the output will be written to the file specified in the ouput form field.  
