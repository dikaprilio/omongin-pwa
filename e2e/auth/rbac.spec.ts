import { test, expect } from '@playwright/test'

/**
 * Role-Based Access Control (RBAC) E2E Tests
 * Tests that different user roles can only access their permitted routes
 */

test.describe('Role-Based Access Control', () => {
    test.describe('Student Access', () => {
        test.beforeEach(async ({ page }) => {
            test.skip(!process.env.TEST_STUDENT_EMAIL, 'Test student credentials not configured')
            
            // Login as student
            await page.goto('/login')
            await page.getByLabel('Email').fill(process.env.TEST_STUDENT_EMAIL!)
            await page.getByLabel('Password').fill(process.env.TEST_STUDENT_PASSWORD!)
            await page.getByRole('button', { name: 'Log In' }).click()
            await page.waitForURL('/curriculum')
        })

        test('student should access curriculum pages', async ({ page }) => {
            await page.goto('/curriculum')
            await expect(page).toHaveURL('/curriculum')
            
            await page.goto('/curriculum/basic-grammar')
            await expect(page).toHaveURL('/curriculum/basic-grammar')
        })

        test('student should access learning features', async ({ page }) => {
            await page.goto('/speaking-test')
            await expect(page).toHaveURL('/speaking-test')
            
            await page.goto('/reading-test')
            await expect(page).toHaveURL('/reading-test')
            
            await page.goto('/interview-sim')
            await expect(page).toHaveURL('/interview-sim')
        })

        test('student should NOT access admin dashboard', async ({ page }) => {
            await page.goto('/dashboard')
            
            // Should be redirected (either to login or unauthorized page)
            await page.waitForURL(/\/login|unauthorized/)
            expect(page.url()).not.toContain('/dashboard')
        })

        test('student should NOT access student management', async ({ page }) => {
            await page.goto('/students')
            
            await page.waitForURL(/\/login|unauthorized/)
            expect(page.url()).not.toContain('/students')
        })

        test('student should NOT access calendar', async ({ page }) => {
            await page.goto('/calendar')
            
            await page.waitForURL(/\/login|unauthorized/)
            expect(page.url()).not.toContain('/calendar')
        })
    })

    test.describe('Teacher/Admin Access', () => {
        test.beforeEach(async ({ page }) => {
            test.skip(!process.env.TEST_TEACHER_EMAIL, 'Test teacher credentials not configured')
            
            // Login as teacher
            await page.goto('/login')
            await page.getByLabel('Email').fill(process.env.TEST_TEACHER_EMAIL!)
            await page.getByLabel('Password').fill(process.env.TEST_TEACHER_PASSWORD!)
            await page.getByRole('button', { name: 'Log In' }).click()
            await page.waitForURL('/dashboard')
        })

        test('teacher should access admin dashboard', async ({ page }) => {
            await page.goto('/dashboard')
            await expect(page).toHaveURL('/dashboard')
        })

        test('teacher should access students page', async ({ page }) => {
            await page.goto('/students')
            await expect(page).toHaveURL('/students')
        })

        test('teacher should access calendar', async ({ page }) => {
            await page.goto('/calendar')
            await expect(page).toHaveURL('/calendar')
        })

        test('teacher should access packages', async ({ page }) => {
            await page.goto('/packages')
            await expect(page).toHaveURL('/packages')
        })
    })

    test.describe('Admin-Only Access', () => {
        test.beforeEach(async ({ page }) => {
            test.skip(!process.env.TEST_ADMIN_EMAIL, 'Test admin credentials not configured')
            
            // Login as admin
            await page.goto('/login')
            await page.getByLabel('Email').fill(process.env.TEST_ADMIN_EMAIL!)
            await page.getByLabel('Password').fill(process.env.TEST_ADMIN_PASSWORD!)
            await page.getByRole('button', { name: 'Log In' }).click()
        })

        test('admin should access teacher management', async ({ page }) => {
            await page.goto('/teachers')
            await expect(page).toHaveURL('/teachers')
        })

        test('admin should access user management', async ({ page }) => {
            await page.goto('/users')
            await expect(page).toHaveURL('/users')
        })
    })
})
