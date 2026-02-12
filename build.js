const execSync = require("child_process").execSync;
const fs = require("fs");
const path = require("path");

// URL of the remote repository to clone
const REPO_URL = "https://github.com/harshgodkar-inventyv/my_proto_schema.git";
// Branch to checkout from the remote repository
const BRANCH = "main";
// Directory inside the repo containing proto files
const DIR_PATH = "myaap";
// Root directory of the current project (where script is run)
const PROJECT_ROOT = process.cwd();
// Temporary folder where the repo will be cloned
const TEMP_DIR = ".proto-tmp";
// Absolute path to the temporary directory
const ABS_TEMP_DIR = path.resolve(PROJECT_ROOT, TEMP_DIR);
// Path to the proto files in the cloned repo
const REMOTE_PROTO_DIR = path.join(TEMP_DIR, DIR_PATH);
// Absolute path to the proto files in the cloned repo
const ABS_REMOTE_PROTO_DIR = path.resolve(PROJECT_ROOT, REMOTE_PROTO_DIR);
// Where protos will be copied inside your Angular project
const LOCAL_PROTO_DIR = "proto";
// Final output: compiled JS
const OUT_DIR = "proto-build";

function run(cmd) {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: "inherit" });
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

// Clone the remote repository
console.log("Cloning private proto repo...");
run(`git clone --depth=1 --branch ${BRANCH} ${REPO_URL} ${TEMP_DIR}`);


// Copy project protos into proto folder
console.log("Copying demo .proto files...");
ensureDir(LOCAL_PROTO_DIR);
try {

  fs.readdirSync(LOCAL_PROTO_DIR).forEach(f =>
    fs.unlinkSync(path.join(LOCAL_PROTO_DIR, f))
  );

  fs.readdirSync(REMOTE_PROTO_DIR)
    .filter(f => f.endsWith(".proto"))
    .forEach(file => {
      fs.copyFileSync(
        path.join(REMOTE_PROTO_DIR, file),
        path.join(LOCAL_PROTO_DIR, file)
      );
    });

  // Compile protos
  console.log("compiling .proto files...");
  ensureDir(OUT_DIR);

  run(`npx pbjs -t static-module -w commonjs -p ${ABS_TEMP_DIR} -o ${OUT_DIR}/index.js ${ABS_REMOTE_PROTO_DIR}/*.proto`);
  run(`npx pbts -o ${OUT_DIR}/index.d.ts ${OUT_DIR}/index.js`);

  console.log("Compilation finished.");

} finally {
  if (fs.existsSync(TEMP_DIR)) {
    console.log("Cleaning up temp folder...");
    fs.rmSync(TEMP_DIR, { recursive: true, force: true });
  }
}
