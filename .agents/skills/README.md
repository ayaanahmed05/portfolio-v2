# Project agent skills

Put one skill in each subdirectory. A skill is recognized by its `SKILL.md`
file at the root of that directory.

```text
.agents/
  skills/
    example-skill/
      SKILL.md
      scripts/        # optional
      references/     # optional
      assets/         # optional
```

## Importing a skill

Clone or copy an internet-hosted skill into this directory, retaining its
directory name and `SKILL.md` entry point. For example:

```sh
git clone https://github.com/OWNER/REPOSITORY.git .agents/skills/skill-name
```

Review a skill's instructions and scripts before running it, especially if it
requests credentials, installs dependencies, or performs external actions.

`_template/` is a starting layout for skills you create locally; duplicate it
and rename the copy before use.
